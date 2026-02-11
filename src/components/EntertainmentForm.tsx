import { useEffect } from "react"
import { Button, Col, Form, Radio, Row, type RadioChangeEvent } from "antd"
import { useSearchParams } from "react-router-dom"

import { CustomRenderer } from "@/share/components/CustomRenderer"

import { createYupSync } from "@/utils/createYupSync"
import { schemaRegistry } from "@/constants/schema-registry"
import { validationRegistry } from "@/constants/validation-registry"
import { entertainmentOptions } from "@/constants/entertainment-optionts"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { EntertainmentField } from "@/types/entertainment.type" 

import { useInitialValues } from "@/hooks/useInitialValues"
import { useAlbums } from "@/songs/hooks/useAlbums"
import { useGenres } from "@/songs/hooks/useGenres"

export const EntertainmentForm = () => {
  const [form] = Form.useForm();
  const [searchParams, setSearchParams] = useSearchParams({ entertainment: TypeEntertainment.SONG });

  const entertainmentSelected: TypeEntertainment = searchParams.get("entertainment") as TypeEntertainment || TypeEntertainment.SONG;

  const artist = Form.useWatch('artist', form)

  const { data: albumsByArtist } = useAlbums(entertainmentSelected === TypeEntertainment.SONG ? (artist ?? '') : '')
  const { data: musicGenres } = useGenres(entertainmentSelected === TypeEntertainment.SONG)

  const currentValidation = validationRegistry[entertainmentSelected];
  const currentSchema = schemaRegistry[entertainmentSelected]({
    albumOptions: albumsByArtist?.map(album => ({ label: album.title, value: album.id })) ?? [],
    genreOptions: musicGenres?.map(genre => ({ label: genre.description, value: genre.id })) ?? [],
  });

  const { data: initialValues } = useInitialValues(entertainmentSelected, 'value-id-123-example-if-needed');
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const handleSubmit = (values: EntertainmentField): void => {
    console.log({ entertainmentSelected, values })
  }

  const handleChangeEntity = (e: RadioChangeEvent) => {
    form.resetFields();
    searchParams.set("entertainment", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Form
      key={entertainmentSelected}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Row gutter={16} justify="center">
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <Radio.Group
            buttonStyle="solid"
            value={entertainmentSelected}
            onChange={handleChangeEntity}
            >
            {entertainmentOptions.map(option => (
              <Radio.Button key={option.value} value={option.value}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={16}>
      {currentSchema.map((item) => (
        <Col key={item.field} {...item.colProps}>
          <Form.Item 
            name={item.field}
            label={item.label}
            rules={[createYupSync(currentValidation, item.field)]}
          >
            <CustomRenderer
              type={item.type}
              inputProps={item.inputProps}
              inputNumberProps={item.inputNumberProps}
              datePickerProps={item.datePickerProps}
              selectProps={item.selectProps}
              draggerProps={item.draggerProps}
            />
          </Form.Item>
        </Col>
      ))}
      </Row>

      <div className="flex justify-end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}
