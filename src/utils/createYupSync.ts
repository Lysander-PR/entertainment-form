import type { FormListProps, RuleObject } from "antd/es/form";
import * as Yup from 'yup';

// * a Form.List only accepts validator rules, and a Form.Item accepts them too
type ValidatorRule = NonNullable<FormListProps['rules']>[number];

export const createYupSync = (schema: Yup.ObjectSchema<Yup.AnyObject>, fieldName: string): ValidatorRule => ({
  async validator(_: RuleObject, value: unknown) {
    if (schema.fields[fieldName] === undefined) {
      return;
    }

    try {
      await schema.validateSyncAt(fieldName, { [fieldName]: value });
    } catch (e) {
      throw new Error((e as Yup.ValidationError).message);
    }
  }
});
