/**
 * Created by luhtonen on 02/08/16.
 */

'use strict';
function minimal_plugin(options) {
  console.log(options);
}

require('seneca')()
  .use(minimal_plugin, {foo: 'bar'});
