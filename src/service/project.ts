import { ProjectApplyType, ProjectCreationType, ProjectUpdateType } from '@/schema/project.schema'
import { request } from './axios'

export const createProject = (data: ProjectCreationType) => request('post', '/projects', { data })

export const getAllProjects = () => request('get', '/projects')

export const getUserProjects = () => request('get', '/projects/mine')

export const getProjectById = (id: string) => request('get', `/projects/${id}`)

export const updateProjectById = (id: string, data: ProjectUpdateType) =>
  request('patch', `/projects/${id}`, { data })

export const applyToProject = (id: string, data: ProjectApplyType) =>
  request('post', `/projects/${id}/apply`, { data })

export const submitProjectFeedback = (id: string, data: unknown) =>
  request('post', `/projects/${id}/feedback`, { data })

export const getProjectFeedbacks = (id: string) => request('get', `/projects/${id}/feedbacks`)
