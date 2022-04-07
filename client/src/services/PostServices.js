import Client from './'

export const getPosts = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getPostComments = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}`)
    return res.data.comments
  } catch (error) {
    throw error
  }
}

export const postComment = async (id, comment) => {
  try {
    const res = await Client.post(`/posts/${id}`, comment)
    return res.data
  } catch (error) {
    throw error
  }
}
