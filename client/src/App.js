import React, { useEffect, useState } from 'react'
import mailSvg from './assets/mail.svg'
import {
  Card,
  Button,
  CardContent,
  CardSubtitle,
  CircularProgress,
  FileInput,
  Grid,
  SendSVGIcon,
  TextField,
  TextIconSpacing,
  Text
} from 'react-md'
import axios from 'axios'
import './App.css'

function App() {
  const [isJs, toggleIsJs] = useState(false)
  const [user, setUser] = useState('')
  const [assessment, addAssessment] = useState(null)
  const [form, setForm] = useState({ name: '', email: '' })
  const [formFilled, toggleFormFilled] = useState(false)
  const [submitted, toggleSubmitted] = useState(false)
  const [loading, toggleLoading] = useState(false)

  useEffect(() => {
    if (assessment) {
      toggleIsJs(true)
    }
    if (localStorage.getItem('submit') === '1') {
      setUser(localStorage.getItem('user'))
      toggleSubmitted(true)
    }
    if (form.name && form.email && assessment && isJs) {
      toggleFormFilled(true)
    }
  }, [assessment, form, isJs])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      toggleLoading(true)
      const formData = new FormData()
      formData.append('file', assessment)
      for (const key in form) {
        formData.append(key, form[key])
      }
      const res = await axios.post(
        process.env.NODE_ENV === 'production'
          ? `${process.env.REACT_APP_API_URL}/upload`
          : `http://localhost:3001/upload`,
        formData
      )
      if (res.status === 200) {
        localStorage.setItem('submit', '1')
        localStorage.setItem('user', form.name)
        setUser(form.name)
        toggleSubmitted(true)
      }
    } catch (error) {
    } finally {
      toggleLoading(false)
      setForm({ name: '', email: '' })
    }
  }

  const handleFile = (e) => {
    let file = e.target.files[0]
    if (file.type === 'text/javascript') {
      toggleIsJs(true)
      return addAssessment(file)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <main>
      {submitted ? (
        <Card className="form">
          <CardContent style={{ textAlign: 'center' }}>
            <Text
              style={{ fontSize: '1.3rem' }}
            >{`Thanks for your submission ${user}`}</Text>
            <div>
              <img src={mailSvg} alt="svg" />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="form">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid columns={1}>
                <TextField
                  id="name"
                  label="Enter Your Name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <TextField
                  id="email"
                  label="Enter Your Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Grid columns={2}>
                  {assessment ? (
                    <CardSubtitle>{assessment.name}</CardSubtitle>
                  ) : (
                    <CardSubtitle>
                      Upload Your Assessment, Ex: assessment.js
                    </CardSubtitle>
                  )}
                  <FileInput
                    id="configurable-file-input"
                    buttonType="text"
                    onChange={handleFile}
                  >
                    Upload
                  </FileInput>
                </Grid>
                <Button
                  type="submit"
                  theme="primary"
                  themeType={formFilled || loading ? 'outline' : 'contained'}
                  disabled={!formFilled || submitted || loading}
                >
                  <TextIconSpacing
                    iconAfter
                    icon={
                      loading ? (
                        <CircularProgress id="loader" centered={false} />
                      ) : (
                        <SendSVGIcon />
                      )
                    }
                  >
                    Submit
                  </TextIconSpacing>
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      )}
    </main>
  )
}

export default App
