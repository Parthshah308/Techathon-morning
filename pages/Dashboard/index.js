/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'

const Dashboard = () => {
  const router = useRouter()

  const [questions, setQuestions] = useState(0)
  const [sortType, setSortType] = useState('Votes')
  const [user, setUser] = useState(0)
  const [tags, setTags] = useState(0)

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get('/question')
      setQuestions(data.length)
    }

    const fetchUser = async () => {
      const { data } = await publicFetch.get('/users')
      setUser(data.length)
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/tags/`)
      setTags(data.length)
    }

    if (router.query.tag) {
    } else {
      fetchQuestionByTag()
      fetchQuestion()
      fetchUser()
    }
  }, [router.query.tag])

  const handleSorting = () => {
    switch (sortType) {
      case 'Votes':
        return (a, b) => b.score - a.score
      case 'Views':
        return (a, b) => b.views - a.views
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break
    }
  }

  return (
    <Layout>
      <Head>
        <title>
          {router.query.tag ? router.query.tag : 'Questions'} - TakeCode
        </title>
      </Head>

      <h2 style={{ padding: '25px' }}>Dashboard</h2>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossorigin="anonymous"
      />

      <div class="col-md-12 ">
        <div class="row">
          <div class="col-xl-6 col-lg-12">
            <div class="card l-bg-cherry">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Users</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">{user}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <div class="card l-bg-blue-dark">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-users"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Questions</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">{questions}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="card l-bg-green-dark">
              <div class="card-statistic-3 p-4">
                <div class="card-icon card-icon-large">
                  <i class="fas fa-ticket-alt"></i>
                </div>
                <div class="mb-4">
                  <h5 class="card-title mb-0">Total Tags</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">{tags}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
