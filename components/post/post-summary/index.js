import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import { AuthContext } from '../../../store/auth'
import { FetchContext } from '../../../store/fetch'

import Tag from '../../tag'

import styles from './post-summary.module.css'
import Button from '../../button'

const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children
}) => {
  const { authState,isAuthenticated, isAdmin } = useContext(AuthContext)
  const { authAxios } = useContext(FetchContext)
  const router = useRouter()

  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your post?')
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/${questionId}`
      )

      if (answerId) {
        setQuestion(data)
      } else {
        router.push('/')
      }
    }
  }
  const handleApprove = async () => {
    const res = window.confirm('Are you sure approve this question?')
    if (res) {
      const { data } = await authAxios.put(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/approve/${questionId}`
      )

      if (answerId) {
        setQuestion(data)
      } else {
        router.push('/')
      }
    }
  }
  const handleReject = async () => {
    const res = window.confirm('Are you sure reject this question?')
    if (res) {
      const { data } = await authAxios.put(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/reject/${questionId}`
      )

      if (answerId) {
        setQuestion(data)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <div className={styles.postCell}>
      <div className={styles.text}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.tagContainer}>
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className={styles.userDetails}>
            <Link href="/users/[user]" as={`/users/${author.username}`}>
              <a>
                <img
                  src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                  alt={author.username}
                />
              </a>
            </Link>
            <div className={styles.info}>
              <span>
                {tags ? 'asked' : 'answered'}{' '}
                {formatDistanceToNowStrict(new Date(created), {
                  addSuffix: true
                })}
              </span>
              <Link href="/users/[user]" as={`/users/${author.username}`}>
                <a>{author.username}</a>
              </Link>
            </div>
          </div>
        </div>
        {(isAuthenticated() && isAdmin()) && (<>
          <div className={styles.row}>
            <Button clButtonssName={styles.delete} onClick={() => handleApprove()}>
              Approve
            </Button>
          </div>
          <div className={styles.row}>
            <Button clButtonssName={styles.delete} onClick={() => handleReject()}>
              Reject
            </Button>
          </div>
           
        </>
        )}
         {(authState.userInfo?.id === author.id) && (<>
         
          <div className={styles.row}>
          <Button className={styles.delete} onClick={() => handleDeleteComment()}>
            Delete
          </Button>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default PostSummary
