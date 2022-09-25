import React, { useContext } from 'react'
import { AuthContext } from '../../../store/auth'
import { TagContext } from '../../../store/tag'

import Tag from '../../tag'
import { Spinner } from '../../icons'

import styles from './extra.module.css'

const Extra = ({ marginTop = 24 }) => {
  const { tagState } = useContext(TagContext)

  const { isAuthenticated ,isAdmin} = useContext(AuthContext);
  return ( <div className={styles.container}>
      <div
        className={styles.tagContainer}
        style={{ marginTop: `${marginTop}px` }}
      >
        <h2>Popular Tags</h2>
        {!tagState && (
          <div className="loading">
            <Spinner />
          </div>
        )}
        <div className={styles.popularTags}>
          {tagState?.map((tag) => (
            <Tag key={tag._id} count={tag.count}>
              {tag._id}
            </Tag>
          ))}
        </div>
      </div>
    </div>)
}

export default Extra
