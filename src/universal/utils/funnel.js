console.log('Funnel Name:', process.env.FUNNEL_NAME);

export default {
  name: process.env.FUNNEL_NAME || ''
}
