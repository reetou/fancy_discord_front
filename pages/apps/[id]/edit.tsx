import Layout from '../../../components/Layout'
import React, { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { toLogin } from "../../../utils/responseUtils";
import Auth from "../../../api/Auth";
import Input from "../../../components/Input";
import { App, AppForm } from "../../../interfaces";
import Button from "../../../components/Button";
import Apps from "../../../api/Apps";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

type Props = {
  item: App
  errors?: string
}

const EditAppPage = ({ item, errors }: Props) => {
  const [form, setForm] = useState<AppForm>({
    project_name: item.project_name,
    bot_token: '',
    default_branch: item.default_branch,
    repo_url: item.repo_url,
  })
  const onSubmit = async () => {
    try {
      const submitData = {...form}
      if (!form.bot_token) {
        delete submitData.bot_token
      }
      const data = await Apps.update(item.id, submitData)
      setForm({
        ...form,
        ...data.app,
      })
      console.log(`Success`, data)
      location.href = `/apps/${item.id}`
    } catch (e) {
      console.error(`Cannot update`, e)
    }
  }
  return (
    <Layout title="Edit app">
      <h1>Edit app</h1>
      <FormContainer>
        <Input
          value={form.project_name}
          onChange={(val) => setForm({...form, project_name: val})}
          placeholder="Project name"
        />
        <Input
          type="password"
          value={form.bot_token}
          onChange={(val) => setForm({...form, bot_token: val})}
          placeholder="Bot token (Leave blank if dont want to edit)"
        />
        <Input
          value={form.repo_url}
          onChange={(val) => setForm({...form, repo_url: val})}
          placeholder="https://github.com/username/projectname"
        />
        <Input
          value={form.default_branch}
          onChange={(val) => setForm({...form, default_branch: val})}
          placeholder="Repository default branch name (probably main or master)"
        />
        <Button
          text="Submit"
          onClick={onSubmit}
        />
      </FormContainer>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  try {
    const id = params?.id
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    if (!req.headers.cookie) {
      return toLogin()
    }
    if (!id) {
      return { notFound: true }
    }
    const data = await Apps.get(id as string, req.headers.cookie)
    return { props: { item: data.app } }
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return toLogin()
    }
    return { props: { errors: err.message }, notFound: true }
  }
}

export default EditAppPage
