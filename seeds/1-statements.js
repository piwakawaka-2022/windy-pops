exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('statements').del()
  await knex('statements').insert([
    {
      id: 1,
      spicy: false,
      content: 'You are doing great! Keep it up!',
      author_id: 5,
    },
    { id: 2, spicy: false, content: 'Treat yo self!', author_id: 5 },
    { id: 3, spicy: false, content: 'Your fit lookin snazzy!', author_id: 5 },
    { id: 4, spicy: false, content: 'You are loved.', author_id: 5 },
    { id: 5, spicy: false, content: 'I appreciate you.', author_id: 5 },
    {
      id: 6,
      spicy: false,
      content:
        'When parents meet you, they hope their kid grows up to be just like you.',
      author_id: 2,
    },
    {
      id: 7,
      spicy: false,
      content: 'You have the kind of smile that makes everyone else happy too!',
      author_id: 2,
    },
    {
      id: 8,
      spicy: false,
      content: 'You are the human version of a golden retriever.',
      author_id: 2,
    },
    {
      id: 9,
      spicy: false,
      content: `I'd love to grow old with you.`,
      author_id: 2,
    },
    {
      id: 10,
      spicy: false,
      content: `You're so beautiful, you could definitely be a part-time model.`,
      author_id: 2,
    },
    {
      id: 11,
      spicy: false,
      content: 'With you, everyday is like Friday!',
      author_id: 2,
    },
    {
      id: 12,
      spicy: false,
      content: 'You better not die first, life would be so boring without you.',
      author_id: 2,
    },
    {
      id: 13,
      spicy: false,
      content: `You're so effortlessly cool, I'd be nervous to talk to you at a party.`,
      author_id: 2,
    },
    {
      id: 14,
      spicy: false,
      content:
        'Are your muscles so big from holding up that giant brain of yours?',
      author_id: 2,
    },
    {
      id: 15,
      spicy: false,
      content: 'I wish I could upvote you TWICE.',
      author_id: 2,
    },
    {
      id: 16,
      spicy: true,
      content: 'Id rather shit in my hands and clap than talk to you',
      author_id: 5,
    },
    {
      id: 17,
      spicy: false,
      content: `Your voice makes me feel like I'm being kissed on the forehead while being tucked in to a bed made of ostrich feathers.`,
      author_id: 2,
    },
    {
      id: 18,
      spicy: false,
      content: `You're so awesome I would fight 3 mountain lions with my hands tied behind my back just to get a chance to talk to you on Zoom with a dial-up connection. Honestly.`,
      author_id: 2,
    },
    {
      id: 19,
      spicy: true,
      content: `What do taxes and going to the Dentist have in common? They're painful to deal with. Like you`,
      author_id: 4,
    },
    {
      id: 20,
      spicy: true,
      content: `You’re like one of the bad Adam Sandler movies`,
      author_id: 4,
    },
    {
      id: 21,
      spicy: true,
      content: `Tiger's skin is actually striped, just like their fur. No two fur patterns are alike.`,
      author_id: 4,
    },
    {
      id: 22,
      spicy: true,
      content: `The japanese word 'Kuchi zamishi' is the act of eating when you're not hungry because your mouth is lonely.`,
      author_id: 40,
    },
    {
      id: 23,
      spicy: false,
      content: `You’re like one of the bad Adam Sandler movies`,
      author_id: 4,
    },
    {
      id: 24,
      spicy: true,
      content: `I was hoping for a battle of wits but you appear to be unarmed.`,
      author_id: 3,
    },
    {
      id: 25,
      spicy: false,
      content: `Knock knock whos there? Someone Awesome. Its you.`,
      author_id: 4,
    },
    {
      id: 26,
      spicy: false,
      content: `You probably have nice handwriting`,
      author_id: 4,
    },
    {
      id: 27,
      spicy: false,
      content: `I would let you walk my dog If I had one`,
      author_id: 4,
    },
    {
      id: 28,
      spicy: false,
      content: `If you were a fruit, you'd be a Fine-apple`,
      author_id: 3,
    },
    {
      id: 29,
      spicy: false,
      content: `You're Cooler Than A Childhood Secret Handshake.`,
      author_id: 3,
    },
    {
      id: 30,
      spicy: false,
      content: 'You smell like bread fresh out of the oven',
      author_id: 3,
    },
  ])
}
