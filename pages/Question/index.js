import React, { useState, useEffect,useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { publicFetch } from '../../util/fetcher'
import { AuthContext } from '../../store/auth'

import Layout from '../../components/layout'
import QuestionWrapper from '../../components/question/question-wrapper'
import QuestionStats from '../../components/question/question-stats'
import QuestionSummary from '../../components/question/question-summary'
import PageTitle from '../../components/page-title'
import ButtonGroup from '../../components/button-group'
import { Spinner } from '../../components/icons'

const HomePage = () => {
  const router = useRouter()
  const { isAuthenticated ,isAdmin} = useContext(AuthContext);

  const [questions, setQuestions] = useState(null)
  const [sortType, setSortType] = useState('Votes')
 
let dummy=[];
  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get('/question')
      setQuestions(data)
      console.log(questions)
      
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${router.query.tag}`)
      
      
    }

    if (router.query.tag) {
      fetchQuestionByTag()
    } else {
      fetchQuestion()
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
          {router.query.tag ? router.query.tag : 'Questions'} - Clone of
          Stackoverflow
        </title>
      </Head>

      
      <ButtonGroup
        borderBottom
        buttons={[ 'Newest', 'Oldest']}
        selected={sortType}
        setSelected={setSortType}
      />

      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      {questions
        ?.sort(handleSorting())
        .map(
          ({
            id,
            votes,
            answers,
            views,
            title,
            text,
            tags,
            author,
            created,
            
          }) => (
            <QuestionWrapper key={id}>
              {!isAuthenticated() && !isAdmin() ? <QuestionStats
                voteCount={votes.length}
                answerCount={answers.length}
                view={views}
              /> :(<></>)}
              <QuestionSummary
                id={id}
                title={title}
                tags={tags}
                author={author}
                createdTime={created}
                
              >
                {text}
              </QuestionSummary>
            </QuestionWrapper>
          )
        )}
    </Layout>
  )
}

export default HomePage
