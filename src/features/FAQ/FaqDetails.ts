export type FaqType = {
  question: string;
  answer: string;
}[];

export const faqData: FaqType = [
  {
    question: "What is your price?",
    answer: "We don't have a set-in-stone pricing because every client has different needs. This is why we offer a free consultation call where we will get to know you and your business. Only then would we be able to give you a pricing offer.",
  },
  {
    question: "How are you different than other agencies?",
    answer: "We pride ourselves in the fact that we've built up a team of experts in every domain of email marketing. We don't outsource work to VAs, and we make sure what we deliver is pure quality.",
  },
  {
    question: "Do you offer a guarantee?",
    answer: "Yes, we do! If we do not increase your email revenue in 60 days by 30%, we will work for free until we hit that number.",
  },
];
