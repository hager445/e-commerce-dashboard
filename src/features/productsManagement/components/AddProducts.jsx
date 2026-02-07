import ButtonUi from "@/ui/ButtonUi";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import Form from "@/ui/Form";

import ProductFields from "./productFields";

import { useForm } from "react-hook-form";
import FormGroup from "@/ui/FormGroup";
import InsertImage from "@/ui/insertImage";
import ControllerUi from "@/ui/ControllerUi";
import { productValidation } from "../validation/product.schema";

import InputGroup from "@/ui/InputGroup";
import { useEffect, useState } from "react";
import Loader from "@/ui/Loader";
import { useAddProduct } from "../hooks/useAddProduct";
import toast from "react-hot-toast";
import { displayError } from "@/utils/displayError";
import DisplayToastr from "@/ui/DisplayToastr";
// const {
//   register,           // ← Register inputs
//   handleSubmit,       // ← Handle form submission
//   formState,          // ← Form state (errors, isDirty, etc.)
//   watch,              // ← Watch input values
//   reset,              // ← Reset form
//   setValue,           // ← Set input value programmatically
//   getValues,          // ← Get current form values
//   trigger,            // ← Trigger validation manually
//   control,            // ← For Controller component
//   setError,           // ← Set custom errors
//   clearErrors,        // ← Clear errors
//   setFocus,           // ← Focus on specific input
//   // ... and more!
// } = useForm();
// =======================================================
// features/
// └── products/
//     ├── hooks/
//     │   ├── useProductForm.js          // Form logic
//     │   └── useCategories.js            // Data fetching
//     ├── components/
//     │   ├── ProductForm.jsx             // UI only
//     │   ├── ProductFormFields.jsx       // Form fields
//     │   └── CategorySelect.jsx          // Reusable select
//     ├── validation/
//     │   └── productValidation.js        // Validation rules
//     └── api/
//         └── productApi.js               // API calls
// ==================================================
// control (passed to Controller):

// Is the form's central state manager
// Controller needs it to know WHERE to store/read data
// Without it, Controller wouldn't know which form it belongs to

// field (given to you by Controller):

// Is the CONNECTION between your custom component and that central state
// Contains the current value and update function for THIS specific field
// Without it, you can't read/write to the form
export default function AddProducts() {
  const { mutate, isError, isPending, isSuccess } = useAddProduct();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
    reset,
  } = useForm({
    defaultValues: {
      // ← You're missing this!
      created_at: null,
      name: "",
      price: null,
      stock: null,
      image: "",
      description: "", // ← Fixed typo (was "decription")
      category_id: "",
    },
  });

  function onSubmit(data) {
    mutate(data);
    // is async operation
  }
  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess, reset]);
  useEffect(() => {
    if (isError) {
      displayError("product couldnt be added");
    }
  }, [isError]);
  if (isPending) return <Loader />;
  return (
    <>
      <DisplayToastr />
      <Form formStyle={"flex gap-4"} onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <ProductFields
            register={register}
            control={control}
            errors={errors}
          />
        </FormGroup>

        <FormGroup formGroupStyle={"flex-col gap-5"}>
          <InputGroup
            label={"product Image"}
            errors={errors}
            fieldName={"image"}
          >
            <InsertImage setValue={setValue} />
          </InputGroup>

          <ControllerUi
            controllerName={"created_at"}
            control={control}
            rules={productValidation.created_at}
            render={({ field }) => (
              <InputGroup
                label={"product date"}
                groupStyle={{ width: "md:w-1/2 w-full" }}
                errors={errors}
                fieldName={"created_at"}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      data-empty={!field.value}
                      className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <ChevronDownIcon data-icon="inline-end" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[212px] p-3" align="start">
                    <Calendar
                      className={"w-full"}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      defaultMonth={field.value}
                    />
                  </PopoverContent>
                </Popover>
              </InputGroup>
            )}
          />
          <ButtonUi type={"submit"}>Add Product</ButtonUi>
        </FormGroup>
      </Form>
    </>
  );
}
