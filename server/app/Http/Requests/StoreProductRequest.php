<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
         if(request()->isMethod('post')){
            return [
                'name' => 'required|string|max:255',
                'price' => 'required',
                'image' => 'required|image|mimes:png,jpg,jpeg|max:2043',
                'description' => 'required|string'
            ];
         }else{
            return [
                 'name' => 'required|string|max:255',
                'price' => 'required',
                'image' => 'nullable|image|mimes:png,jpg,jpeg|max:2043',
                'description' => 'required|string'
            ];
         }
    }
    public function messages()
    {
         if(request()->isMethod('post')){
            return [
                'name.required' => 'Name is Required',
                'price.required' => 'Price is Required',
                'image.required' => 'Image is Required',
                'description.required' => 'Description is Required'
            ];
         }else{
            return [
                'name.required' => 'Name is Required',
                'price.required' => 'Price is Required',
                'description.required' => 'Description is Required'
            ];
         }
    }
}
