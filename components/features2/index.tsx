import { Divider, Image, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { CheckIcon } from "../icons/CheckIcon";

export const Features2 = () => {
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
          mb: "$20", // Added margin bottom to create space above divider
          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex direction="column" align={"center"}>
          <Text span css={{ color: "green" }}>
            Hiring Support
          </Text>
          <Text h3>Your talent needs could be solved</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            We can help you tap onto talent you need, and advise you on the
            relevant government subsidies to reduce hiring and training costs.
          </Text>

          <Flex
            justify={"center"}
            wrap={"wrap"}
            css={{
              py: "$10",
            }}
          >
            <Flex
              css={{
                py: "$10",
                gap: "$5",
              }}
            >
              <CheckIcon />
              <Flex direction={"column"}>
                <Text h4 weight={"medium"}>
                  Government Grants
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  The Singapore government provides several grants for you to
                  hire new talent or train/redeploy existing talent based on
                  your business needs.
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
                  Talent Search
                </Text>
                <Text
                  span
                  css={{
                    maxWidth: "325px",
                    color: "$accents8",
                  }}
                >
                  No time to find talents? Leave it to us to help you
                  find qualified candidates to run your business.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <Image
            alt="A picture of 2 hands shaking in the context of a job hiring"
            src="/hiring.jpg"
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
