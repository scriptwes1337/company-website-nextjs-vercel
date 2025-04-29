import {Divider, Grid, Image, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { CheckIcon } from '../icons/CheckIcon';

export const Features1 = () => {
   return (
     <>
       <Flex
         direction={"column"}
         css={{
           gap: "1rem",
           pt: "$20",
           justifyContent: "center",
           alignItems: "center",
           px: "$6",
           "@sm": {
             justifyContent: "space-around",
             px: "$32",
             flexDirection: "row",
           },
           "@md": {
             px: "$64",
           },
         }}
       >
         <Flex direction="column">
           <Text span css={{ color: "green" }}>
             Enterprise SaaS Solutions
           </Text>
           <Text h3>Our software grows with your business</Text>
           <Text
             span
             css={{
               maxWidth: "400px",
               color: "$accents8",
             }}
           >
             We offer Customer Relationship Management (CRM), Human Resource
             Management (HRM), and more. These software services streamline your
             business operations to maximize your results as your business
             grows.
           </Text>

           <Flex
             css={{
               py: "$10",
               gap: "$5",
             }}
           >
             <CheckIcon />
             <Flex direction={"column"}>
               <Text h4 weight={"medium"}>
                 Government subsidized prices
               </Text>
               <Text
                 span
                 css={{
                   maxWidth: "400px",
                   color: "$accents8",
                 }}
               >
                 Receive huge subsidies when you tap on government grants,
                 thanks to our software being pre-approved by the government.
               </Text>
             </Flex>
           </Flex>
           <Flex
             css={{
               py: "$10",
               gap: "$5",
             }}
           >
             <CheckIcon />
             <Flex direction={"column"}>
               <Text h4 weight={"medium"}>
                 Powered by Open Source Software
               </Text>
               <Text
                 span
                 css={{
                   maxWidth: "400px",
                   color: "$accents8",
                 }}
               >
                 Our solutions are built upon open source codebases and hosted
                 securely with reliable providers to ensure your security.
               </Text>
             </Flex>
           </Flex>
           <Flex
             css={{
               py: "$10",
               gap: "$5",
             }}
           >
             <CheckIcon />
             <Flex direction={"column"}>
               <Text h4 weight={"medium"}>
                 Dedicated Support
               </Text>
               <Text
                 span
                 css={{
                   maxWidth: "400px",
                   color: "$accents8",
                 }}
               >
                 We make ourselves available daily to attend to your support
                 requests. We also provide training and setup for you.
               </Text>
             </Flex>
           </Flex>
         </Flex>
         <Flex align={"center"} justify={"center"}>
           <Image
             alt="Rocket launching"
             src="/grow.jpg"
             width={"20rem"}
           />
         </Flex>
       </Flex>
       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
