/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;