
export function activeClass(className : string , activ : boolean) {
  if (activ) {
    return className +"-active"
  } else {
    return className
  }
}