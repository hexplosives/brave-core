/* Copyright (c) 2023 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */

import { provideStrings } from '../../../../../.storybook/locale'

provideStrings({
  summarizeFailedLabel: 'The summarizer feature is currently available only for select articles and other long-form web pages.',
  placeholderLabel: 'Enter a prompt here',
  enableQuestionsTitle: 'Enable suggested questions?',
  enableQuestionsDesc: 'Brave AI can automatically suggest questions based on the content of the site. You can disable it later in Settings.',
  enableQuestionsButtonLabel: 'Enable',
  noThanksButtonLabel: 'No Thanks',
  aboutTitle: 'Brave AI',
  aboutDescription: 'The Brave AI Chat feature summarizes the content of a webpage you browse and includes a chat interface that allows you to make follow-up inquiries of the summarized content for that page.',
  aboutDescription_2: 'The summarized page and any questions you ask of the Chat feature are sent to the servers of an external API partner (no identifiers are sent with that query).',
  aboutNote: 'Please ensure that the page content and any follow-up inquiries do not contain personal or sensitive information. The accuracy of summaries and inquiry responses is not guaranteed and so you should not rely on any text related to health, personal safety or financial matters.',
  acceptButtonLabel: 'Accept and begin',
  pageContentWarning: 'Disconnect to stop sending this page content to Leo, and start a new conversation',
  errorNetworkLabel: 'There was a network issue connecting to Leo, check your connection and try again.',
  errorRateLimit: 'Leo is too busy right now. Please try again in a few minutes.',
  retryButtonLabel: 'Retry',
  dismissButtonLabel: 'Dismiss',
  'introMessage-0': `I'm here to help. What can I assist you with today?`,
  'introMessage-1': 'I have a vast base of knowledge and a large memory able to help with more complex challenges.',
  modelNameSyntax: '$1 by $2',
  'modelCategory-chat': 'Chat',
  menuNewChat: 'New chat',
  menuSuggestedQuestions: 'Suggested questions',
  menuSettings: 'Settings',
  menuTitleModels: 'Available language models',
  premiumButtonLabel: 'Go Premium',
  rateLimitReachedTitle: 'Response rate limit reached',
  rateLimitReachedDesc: "Unlock a higher response rate by subscribing to Premium, or try again later",
  premiumFeature_1: 'Access to industry-leading LLMs',
  premiumFeature_2: 'Higher rate limits',
  premiumLabel: 'Brave Leo Premium',
  premiumPricing: 'USD \$ $1 /month',
  unlockPremiumTitle: 'Unlock the full potential of Leo',
  premiumFeature_1_desc: 'Anthropic Claude + more coming soon',
  premiumFeature_2_desc: 'Priority access and increased response limits',
  feedbackSent: 'Feedback sent successfully',
  answerLiked: 'Answer liked',
  answerDisliked: 'Answer disliked',
  addFeedbackButtonLabel: 'Add feedback',
  copyButtonLabel: 'Copy',
  likeAnswerButtonLabel: 'Like answer',
  dislikeAnswerButtonLabel: 'Dislike answer',
  provideFeedbackTitle: 'Provide Brave AI Feedback',
  selectFeedbackTopic: 'Select the topic of your feedback?',
  feedbackCategoryLabel: 'Whats your feedback about?',
  feedbackDescriptionLabel: 'Provide feedback here',
  feedbackPremiumNote: 'Brave Leo Premium provides access to an expanded set of language models for even greater answer nuance. $1Learn more$2',
  submitButtonLabel: 'Submit',
  cancelButtonLabel: 'Cancel',
  optionNotHelpful: 'Not helpful',
  optionIncorrect: 'Incorrect',
  optionUnsafeHarmful: 'Unsafe/harmful',
  optionOther: 'Other',
  ratingError: 'Your rating could not be submitted, please check network connection and try again',
  feedbackError: 'Your feedback could not be submitted, please check network connection and try again'
})
