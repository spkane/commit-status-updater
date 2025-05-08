import * as github from '@actions/github'

export async function validateEventType(): Promise<void> {
  if (
    github.context.eventName !== 'pull_request' &&
    github.context.eventName !== 'pull_request_target' &&
    github.context.eventName !== 'merge_group' &&
    github.context.eventName !== 'push'
  ) {
    throw new Error(
      'Error, action only works for pull_request, pull_request_target, merge_group or push events!'
    )
  }
}
