import { CAlert } from '@chakra-ui/c-alert'
import { isStyleProp } from '@chakra-ui/styled-system'

export const MdcBlockquote = defineComponent({
  name: "MdcBlockquote",
  components: {
    CAlert,
  },
  setup(_, { slots }) {
    const style = {
      mt: "4",
      role: "none",
      status: "warning",
      variant: "left-accent",
      as: "blockquote",
      rounded: "4px",
      my: "1.5rem"
    }

    return () => (
      <CAlert
        {...style}
      >
        {slots}
      </CAlert>
    )
  },
})

export const MdcBlockquote2 = defineComponent({
  name: "MdcBlockquote2",
  components: {
    CAlert,
  },
  setup(_, { slots }) {
    const style = {
      mt: "4",
      role: "none",
      status: "warning",
      variant: "left-accent",
      as: "blockquote",
      rounded: "4px",
      my: "1.5rem"
    }

    return () => (
      <CAlert
        mt="4"
        role="none"
        status="warning"
        variant="left-accent"
        as="blockquote"
        rounded="4px"
        my="1.5rem"
      >
        2 {slots}
      </CAlert>
    )
  },
})