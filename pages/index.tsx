import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Box} from '../components/styles/box';
import {Features1} from '../components/features1';
import {Features2} from '../components/features2';
import {Features3} from '../components/features3';
import {Testimonials} from '../components/tesminonials';
import {Footer} from '../components/footer';
import { CTA } from '../components/cta/cta';
import Head from 'next/head';

const Home: NextPage = () => {
   return (
     <div>
       <Head>
         <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
         <script src="https://files.bpcontent.cloud/2025/04/29/06/20250429060643-FBG5H2AL.js"></script>
       </Head>
       <Layout>
         <Nav />
         <Box as="main">
           <Hero />
           <Features1 />
           <Features2 />
           <Features3 />
           <Testimonials />
           <CTA />
           <Footer />
         </Box>
       </Layout>
     </div>
   );
};

export default Home;
