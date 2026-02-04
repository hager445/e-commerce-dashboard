// import { Select } from "@/components/ui/select";
import InputGroup from "@/ui/InputGroup";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productValidation } from "../validation/product.schema";
import { useCategories } from "../hooks/useCategories";
import Loader from "@/ui/Loader";
import { Controller } from "react-hook-form";
import ControllerUi from "@/ui/ControllerUi";
// React Hook Form register يشتغل بس مع عناصر HTML أصلية زي <input> و <select> و <textarea>.
// Controller هو حل React Hook Form للتعامل مع العناصر غير التقليدية (custom components).
// ✅ تعرف إن RHF بيعتمد على uncontrolled inputs
// ✅ تعرف إن register بيربط input عادي بالفورم
// ✅ تعرف إن Controller هو bridge للكومبوننتات المخصصة
// ✅ تعرف إن الفورم ليه state داخلي
// ✅ تعرف إن handleSubmit هو اللي بيمنع reload ويجمع الداتا
export default function SelectCategoriesField({ control, errors }) {
  const { categories, isLoading, isError } = useCategories();

  return (
    <ControllerUi
      controllerName="category_id"
      control={control}
      rules={productValidation.category_Id}
      render={({ field }) => (
        <>
          <InputGroup
            label={"product category"}
            groupStyle={{ width: "md:w-1/2 w-full" }}
            errors={errors}
            fieldName={"category_id"}
          >
            <Select
              value={field.value}
              onValueChange={field.onChange}
              className="bg-white border border-gray-100 rounded-lg px-4 py-2 w-full h-20 focus-visible:outline-none! focus-visible:ring-0!"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Product Category" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories?.map((c) => (
                    <SelectItem
                      key={c.id}
                      value={c.id}
                      className={"capitalize"}
                    >
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </InputGroup>
          {/* {fieldState.error && <Error error={fieldState.error} />} */}
        </>
      )}
    />
  );
}
