# Merge sort

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