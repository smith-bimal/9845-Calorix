/* eslint-disable react/prop-types */
import { X, Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import apiRequest from '../lib/apiRequest';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

const RegisterCard = ({ onClose, switchToLogin }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl p-8 w-[400px] relative shadow-2xl">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 transition-colors"
      >
        <X size={24} />
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">Create Account</h2>
        <p className="text-neutral-600">Sign up to get started</p>
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          acceptTerms: false
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          apiRequest.post('/auth/register', values)
            .then(res => {
              console.log(res.data);
            }).catch(e => {
              console.log(e);
            }).finally(() => {
              onClose();
            })
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <Field
                  name="name"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-black focus:outline-none ${errors.name && touched.name ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && touched.name && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.name}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <Field
                  name="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-black focus:outline-none ${errors.email && touched.email ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && touched.email && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <Field
                  name="password"
                  type="password"
                  className={`w-full pl-10 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-black focus:outline-none ${errors.password && touched.password ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  placeholder="Create a password"
                />
              </div>
              {errors.password && touched.password && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.password}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="flex items-center">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  className={`rounded border-neutral-300 text-black focus:ring-black ${errors.acceptTerms && touched.acceptTerms ? 'border-red-500' : ''
                    }`}
                />
                <span className="ml-2 text-sm text-neutral-600">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
              {errors.acceptTerms && touched.acceptTerms && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.acceptTerms}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 px-4 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Create Account</span>
              <ArrowRight size={20} />
            </button>

            <div className="text-center text-sm text-neutral-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={switchToLogin}
                className="text-black font-semibold hover:underline"
              >
                Sign in
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default RegisterCard;