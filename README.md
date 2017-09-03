### Fibonacci numbers

```
define function Fibonacci number
  take n
  call if
    call less than
      n
      integer 1
    throw argument error
    call if
      call less than or equal to
        n
        integer 2
      integer 1
      call sum
        call Fibonacci number
          call difference
            n
            integer 2
        call Fibonacci number
          call difference
            n
            integer 1

call Fibonacci number
  integer 5
```

### Merge sort

```
define function midpoint
  take list
  call quotient
    call count
      list
    integer 2

define function merge
  take a
  take b
  take comparator
  call if
    call empty
      a
    b
    call if
      call empty
        b
      a
      call if
        call comparator
          call first
            a
          call first
            b
        call prepend
          call first
            a
          call merge
            call rest
              a
            b
            comparator
        call prepend
          call first
            b
          call merge
            call rest
              b
            a
            comparator

define function merge sort
  take list
  take comparator
  call if
    call less than
      call count
        list
      integer 2
    list
    call merge
      call merge sort
        call take
          call midpoint
            list
          list
        comparator
      call merge sort
        call drop
          call midpoint
            list
          list
        comparator
      comparator

call merge sort
  start list
    integer 8
    integer 2
    integer 5
    integer 0
    integer 3
  end list
  less than
```

### Brainfuck interpreter

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
