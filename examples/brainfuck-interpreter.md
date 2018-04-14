```
define function read 
  take context
  call get or default
    call get
      context
      symbol data
    call get
      context
      symbol data pointer
    integer 0

define function write
  take context
  take value
  call set
    context
    symbol data
    call set
      call get
        context
        symbol data
      call get
        context
        symbol data pointer
      value

define function execute
  take code
  take context
  call if
    call empty
      code
    context
    call if
      call is list
        call first code
      call if
        call equals
          number 0
          call read
            context
        call execute
          call shift
            code
          context
        call execute
          code
          call execute
            call first
              code
            context
      call execute
        call shift
          code
        call case
          call first
            code
          start map
            character +
            call write
              context
              call increment
                call read
                  context
            character -
            call write
              context
              call decrement
                call read
                  context
            character .
            call set
              context
              symbol output
              call unshift
                call get
                  context
                  symbol output
                call read
                  context
            character ,
            call set
              call write
                context
                call first
                  call get
                    context
                    symbol input
              symbol input
              call shift
                call get
                  context
                  symbol input
            character <
            call set
              context
              symbol data pointer
              call decrement
                call get
                  context
                  symbol data pointer
            character >
            call set
              context
              symbol data pointer
              call increment
                call get
                  context
                  symbol data pointer
          end map

define function parse
  take instructions
  take code
  take stack
  call if 
    call empty
      instructions
    code
    call case
      call last
        instructions
      start map
        start set
          character >
          character <
          character +
          character -
          character .
          character ,
        end set
        call parse
          call pop
            instructions
          call unshift 
            call last
              instructions
            code
          stack
        character [
        call parse
          call pop
            instructions
          call unshift
            code
            call first
              stack
          call pop
            stack
        character ]
        call parse
          call pop
            instructions
          empty list
          call push
            code
            stack
      end map

define function brainfuck
  take program
  take input
  call join
    call map
      coerce to character
      call get
        call execute
          call parse
            program
            empty list
            empty stack
          start map
            symbol data
            empty map
            symbol data-pointer
            integer 0
            symbol input
              call map
                coerce to integer
                input
            symbol output
          end map
        symbol output

define hello world
  start list
    character +
    character +
    character +
    character +
    character +
    character +
    character +
    character +
    character [
    character >
    character +
    character +
    character +
    character +
    character [
    character >
    character +
    character +
    character >
    character +
    character +
    character +
    character >
    character +
    character +
    character +
    character >
    character +
    character <
    character <
    character <
    character <
    character -
    character ]
    character >
    character +
    character >
    character +
    character >
    character -
    character >
    character >
    character +
    character [
    character <
    character ]
    character <
    character -
    character ]
    character >
    character >
    character .
    character >
    character -
    character -
    character -
    character .
    character +
    character +
    character +
    character +
    character +
    character +
    character +
    character .
    character .
    character +
    character +
    character +
    character .
    character >
    character >
    character .
    character <
    character -
    character .
    character <
    character .
    character +
    character +
    character +
    character .
    character -
    character -
    character -
    character -
    character -
    character -
    character .
    character -
    character -
    character -
    character -
    character -
    character -
    character -
    character -
    character .
    character >
    character >
    character +
    character .
    character >
    character +
    character +
    character .
  end list

call brainfuck
  hello world
  empty string
```
