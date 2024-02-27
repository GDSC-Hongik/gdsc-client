type AnyObject = {
  [key: string]: any;
};

export function countTextInObject(
  obj: AnyObject | undefined,
  searchText: string
): number {
  if (obj) {
    let count = 0;

    const checkAndCount = (value: any) => {
      if (typeof value === 'string') {
        if (value.includes(searchText)) {
          count++;
        }
      } else if (typeof value === 'object' && value !== null) {
        for (const key in value) {
          checkAndCount(value[key]);
        }
      }
    };

    for (const key in obj) {
      checkAndCount(obj[key]);
    }

    return count;
  }
  return 0;
}
