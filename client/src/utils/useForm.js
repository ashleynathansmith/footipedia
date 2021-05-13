import React from 'react'

export default function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)

  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  return {
    formdata,
    handleChange,
    setFormdata,
  }
}