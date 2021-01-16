import axios from './axios'
import { GetServerSidePropsContext } from "next";

const check = async ({req: {headers: {cookie}}}: GetServerSidePropsContext): Promise<{}> => {
  const res = await axios({
    method: 'GET',
    url: `/auth/check`,
    headers: {
      cookie,
    }
  })
  return res.data
}

export default {
  check,
}
