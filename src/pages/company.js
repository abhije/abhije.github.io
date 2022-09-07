import * as React from 'react'
import { Link } from 'gatsby'
import Layout from 'templates/layout'

const CompanyPage = () => {
  return (
    <Layout pageTitle="Anout">
      <h1>Company</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo similique
        in natus dolores, ipsum earum alias porro consectetur harum id! Corrupti
        ipsam necessitatibus dolorum sed voluptatibus a ipsa praesentium in!</p>
        <Link to='/'>Home</Link>
    </Layout>
  )
}

export const Head = () => <title>Company</title>
export default CompanyPage
