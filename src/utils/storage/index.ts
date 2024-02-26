type StorageType = {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
  clearAll(): void;
};

export class LocalStorage implements StorageType {
  private serialize = <T>(value: T) => {
    return JSON.stringify(value);
  };

  private deserialize = (value: string) => {
    try {
      return JSON.parse(value);
    } catch (e) {
      return '';
    }
  };
  get(key: string) {
    try {
      return this.deserialize(localStorage.getItem(key) || '');
    } catch (e) {
      return '';
    }
  }

  set(key: string, value: string) {
    localStorage.setItem(key, this.serialize(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clearAll() {
    localStorage.clear();
  }
}

const lStorage = new LocalStorage();

export default lStorage;
