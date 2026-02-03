import { Typography } from "antd"
import type { DatePickerProps, InputNumberProps, InputProps } from "antd"

import { CustomInput } from "@/components/ui/CustomInput"
import { CustomInputNumber } from "@/components/ui/CustomInputNumber"
import { CustomDatePicker } from "@/components/ui/CustomDatePicker"
import { CustomSelect } from "@/components/ui/CustomSelect"
import { CustomDragger } from "@/components/ui/CustomDragger"

import { TypeRenderer } from "@/types/enums/type-renderer.enum"
import type { CustomDraggerProps } from "@/types/interfaces/custom-dragger.interface"
import type { CustomSelectProps } from "@/types/interfaces/custom-select.interface"

interface Props {
    type: TypeRenderer
    inputProps?: InputProps
    inputNumberProps?: InputNumberProps
    datePickerProps?: DatePickerProps
    selectProps?: CustomSelectProps
    draggerProps?: CustomDraggerProps
}

const { Text } = Typography;

export const CustomRenderer = ({
    type,
    inputProps = {},
    inputNumberProps = {},
    datePickerProps = {},
    selectProps = { options: [] },
    draggerProps = { title: '', description: '' },
    ...formFieldPropsByAntd
}: Props) => {
    switch (type) {
        case TypeRenderer.INPUT:
            return <CustomInput {...formFieldPropsByAntd} {...inputProps} />
        case TypeRenderer.DATE_PICKER:
            return <CustomDatePicker {...formFieldPropsByAntd} {...datePickerProps} />
        case TypeRenderer.DRAGGER:
            return <CustomDragger {...formFieldPropsByAntd} {...draggerProps} />
        case TypeRenderer.INPUT_NUMBER:
            return <CustomInputNumber {...formFieldPropsByAntd} {...inputNumberProps} />
        case TypeRenderer.SELECT:
            return <CustomSelect {...formFieldPropsByAntd} {...selectProps} />
        default:
            return <Text>Unsupported type: {type}</Text>
    }
}
