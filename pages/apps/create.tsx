import Layout from '../../components/Layout'
import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { toLogin } from "../../utils/responseUtils";
import Auth from "../../api/Auth";
import Input from "../../components/Input";
import { AppForm } from "../../interfaces";
import Button from "../../components/Button";
import Apps from "../../api/Apps";
import styled from "styled-components";
import Select from "../../components/Select";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const WithStaticProps = () => {
  const [form, setForm] = useState<AppForm>({
    project_name: '',
    bot_token: '',
    default_branch: '',
    repo_url: '',
    type: 'js'
  })
  const onSubmit = async () => {
    try {
      const data = await Apps.create(form)
      setForm({
        ...form,
        ...data.app,
      })
      console.log(`Success`, data)
      location.href = '/apps'
    } catch (e) {
      console.error(`Cannot create`, e)
    }
  }
  return (
    <Layout title="Create app">
      <h1>Create app</h1>
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
          placeholder="Bot token"
        />
        <Input
          value={form.repo_url}
          onChange={(val) => setForm({...form, repo_url: val})}
          placeholder="https://github.com/username/projectname"
        />
        <Select
          value={form.type}
          options={[
            { value: 'js', label: 'JavaScript' },
            { value: 'python', label: 'Python' },
          ]}
          onChange={(val) => setForm({...form, type: val})}
          title="Bot language"
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    if (!ctx.req.headers.cookie) {
      return toLogin()
    }
    await Auth.check(ctx)
    return {
      props: {}
    }
  } catch (e) {
    return toLogin()
  }
}

export default WithStaticProps
