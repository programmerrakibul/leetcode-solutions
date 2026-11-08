const TimeLimitedCache = function() {
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const cache = this.cache;
  const now = Date.now();
  const expireAt = now + duration;
  const exists = cache.has(key) && cache.get(key).expireAt > now;

  if(exists){
    clearTimeout(cache.get(key).timerId)
  }

  const timerId = setTimeout(()=>{
    cache.delete(key)
  }, duration);
  
  cache.set(key, {
    value,
    timerId,
    expireAt
  });

  return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  const cache = this.cache
  
  if(cache.has(key) && cache.get(key).expireAt > Date.now()){
    return cache.get(key).value
  };

  return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  const mappedItems = this.cache.values();
  let count = 0;

  for(const {expireAt} of mappedItems){
    if(expireAt > Date.now()){
      count++
    };
  };

  return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
