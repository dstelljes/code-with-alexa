# Fibonacci numbers

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
