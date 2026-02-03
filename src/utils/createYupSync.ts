import type { RuleObject } from "antd/lib/form";
import * as Yup from 'yup';

export const createYupSync = (schema: Yup.ObjectSchema<Yup.AnyObject>, fieldName: string): RuleObject => ({
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