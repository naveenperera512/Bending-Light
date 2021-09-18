/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAA5CAYAAADZVaKeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAJJREFUeNrsXU1rE0EYnv0mtUI91a9isPVeBVFEof4Drx4sgoIXC7Z3qYJ68WC9K+JBBC/+AEXzE/oHxEpbPfUjQbPZb2c2iW02oNnZaW32fR4ISSC7sLPPPs/zzkxmNJbB5KnqDANKiy/fVmoqz2fuIs5N/vbs2PETY5VKBS1dQriuK962+es5J9IDZQTi5LnGSfNq9tZtdnpyCi1dYvxYXx979/bNYkeNCpNI6xDo6/Ubs9XzFy6ihQlgc2ODPVq8Lz4e4STaVmFh1UuXrxBv1oTMlY4fHWcnJybY2urqNP9aU0EgZlkmHk1Cz8HIyCG1IdoyLTQ+IWh6ml4+8/gic/gSfz0U9gcFokogTWN37s6xyakzuY7b2txkr1++uPd9fU3Y39VdBIICUYLOCWSZJrPtfPdd5Ke5hQX29MnjGf51pvwKlNAkyL8uWyiQyWOLbdm5zy2OmT57jn36+GGHQCYyEDkLE6JhO7YUG0cPj6IKox2i9baFSUYXwzCyBIICUVMgUyiQbcsRSAeByIfoNAPJEmj4FQjpuHAGkqjCdgikQ4FoZ6CCFmaYvQSyQSBiFqa3qzBpAmUUSFbK4BhDXMbTzkBAYQLxe+44cgQyzYyFxXGMVv3/t3VPf56FsDBHlQL5vo/7RwhxEhcs4zMZyAOBaGW7OGFRFLEwDOUIGCcZAnnDTSANnMgTgNLIEgQ+a7U8qVN0iXdgLUyEPGAPFShJuOsEzG21/v4gagMSKAgCtCqlDCQUiIuG50kqELc/hGjiCuRz0ZAlUNRvYVAgWlVYkrqObPbtUyBYGLUqLO4QSFaBYGHkLSzwgwIZSFkVRrhaGuJLF/04fhEL61MgWBgxBSpoYf1VGAhESRjjbhXmD2lHYv5+QnQsqg3RxaqwCFUY9TJesYWBQFQVqKRjYcA+lPGcQLL3HQoEC1NdhUGBqFlYGITpgCoUCJC2MNmJhBHF6RzoCOi1sDAUGUiRhYVQIHoKJMbCWormA8HCCJbxRRQobxmPGaZlU6D2nGh0JAKSGUjxdA7BRoCWhQnX8TKT6gcmEHqiadeVwsLEaHxL1ZxoWBgxCxMhGgoEFFGgZrPJosyaCIMWS60O8XYIJCllwPAqUKNRZ/qvn1LH+5x8HDUoEGEFajQaaY90HoiFqRzLEumrJjavA4HIKlDMTF3nRBo8iKcru7aXdUn3yuixMNdtolX3ofo5UAQyjHn+cTnPcdktM/8QqF6vgxCEIKZyCPIU3UO1S6CV+tZ2lekYr6ARgLgChWm3zXLRU3UJNM9P+N71PRZ0/jAGlBMGzz0VxxELjS8V3e6yR7u7uzaHYTgmxkmA8qG9On2qGYI883ti/tg3vvRYVqE8XfwWYAA/FkSe9HqdXAAAAABJRU5ErkJggg==';
export default image;