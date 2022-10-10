import * as yup from 'yup';

export const validationSchema = [
   yup.object({
      fullName: yup.string().required('Full name is required'),
      address1: yup.string().required('Address line 1 is required'),
      address2: yup.string().required('Address line 2 is required'),
      city: yup.string().required('City is a required field'),
      state: yup.string().required('State is a required field'),
      zip: yup.string().required('Zip is a required field'),
      country: yup.string().required('Country is a required field')
   }),
   yup.object(),
   yup.object({
      nameOnCard: yup.string().required()
   })
]
