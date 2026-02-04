import React from "react";
import { productValidation } from "../validation/product.schema";

import InputGroup from "@/ui/InputGroup";
import SelectCategoriesField from "./selectCategoriesField";

export default function ProductFields({ register, errors, control }) {
  return (
    <>
      <InputGroup
        label={"product name"}
        groupStyle={{ width: "md:w-1/2 w-full" }}
        placeholder={"Enter Product Name"}
        inputType={"text"}
        register={register}
        fieldName={"name"}
        errors={errors}
        validation={productValidation.productName}
      />
      {/* <Error error={errors?.name} /> */}
      {/* price */}
      <InputGroup
        label={"product price"}
        groupStyle={{ width: "md:w-1/2 w-full" }}
        placeholder={"Enter Product price"}
        inputType={"number"}
        register={register}
        fieldName={"price"}
        errors={errors}
        validation={productValidation.price}
      />
      <SelectCategoriesField
        register={register}
        control={control}
        errors={errors}
      />
      {/* stock */}
      <InputGroup
        label={"stock"}
        groupStyle={{ width: "md:w-1/2 w-full" }}
        placeholder={"How Many items in the stock?"}
        inputType={"number"}
        register={register}
        fieldName={"stock"}
        errors={errors}
        validation={productValidation.stock}
      />
      {/* description */}
      <InputGroup
        label={"description"}
        groupStyle={{ width: "w-full" }}
        errors={errors}
        fieldName={"description"}
      >
        <textarea
          name={"description"}
          placeholder={"Type in here .. "}
          {...register("description", productValidation.description)}
          className="bg-white border border-gray-100 rounded-lg px-4 py-2 w-full h-20 focus:outline-none! focus:ring-0!"
        />
      </InputGroup>
    </>
  );
}
