import { fieldUnregister } from '../index';

describe('[FormContext:Action] fieldUnregister()', () => {
  it('Should remove the field from the state', () => {
    const { fields } = fieldUnregister(1)({
      fields: [
        {
          id: 1,
          name: 'myField',
          value: 'my value',
          isEnabled: true,
        },
      ],
    });

    expect(fields).toHaveLength(0);
  });

  it('Should not create the field if name does not exist', () => {
    const { fields } = fieldUnregister(2)({
      fields: [
        {
          id: 1,
          name: 'myField',
          value: 'my value',
          isEnabled: true,
        },
      ],
    });

    expect(fields).toHaveLength(1);
  });

  it('Should keep the field in the state if isKeepValue is true', () => {
    const { fields } = fieldUnregister(1, true)({
      fields: [
        {
          id: 1,
          name: 'myField',
          value: 'my value',
          isEnabled: true,
        },
      ],
    });

    expect(fields).toHaveLength(1);

    const field = fields.find((x) => x.name === 'myField');
    expect(field).toHaveProperty('isEnabled', false);
    expect(field).toHaveProperty('value', 'my value');
  });
});
