/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACzCAYAAAA+AQY5AAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF4xJREFUeNrsXW1oHdeZPvdeG6JAjSpDZSJBb7EEzpI4Skoipy3xDd0Qe5fdKArdJCis5eLS1MWx1UD7pyAbumxTKIpryG5pWNtsTNofdVLK4uRXrgMhkQOOYgXcxQ6RF7s0WaKoMdQtNbTnGZ1xr+a+58zMvTPnnLnzPjC5iu/HzJx55p3n/TjvqYiU2PfUzIR82S63Mbk1NB9bUNtpuTWP/GRuSTAYDlFJSO5++XJAbrvkVu9gPyD9YUn4YzzkDC+Jriz4XIcEj2JFbjNMeIZXRJckPypfpnPYLyz8wyxpGE6JrqTKa0qH5wVY992S7C/zZWBYJ3oakg8NDYmb+/rW/NvlK1fEtWvX0hzDbpYyDBdEN8qV0ZERcc/43WLr7beJvgjJQ1yRZD+3+J6Yn39bLC8vJzmOh9myM6wRXZIcBD+qs96PTE6IkZHNqXZw6pVXRbP5epyVh4y5kzU7Iy/UIpLllNxuin6osf0+8Y09XxcDAwOpd4AnwN/dukUsLf2fuHr1qu5j2GfjzPxbP+VLwsiV6OPj9/6HfNkW/cDU1OPigb//alc72bBhg/jiXXeK8+f/10T2TfIYfi/J/hZfFkYu0kVZ808oSz45OZHZziBfDh76gUnGQMJ8QUqYFb40jCxRVa8HKE2eJckBOK+QQAbghpvly8LIi+i7om88kjHJQ8CZRcTGgAPyCVPnS8PIlOiSVIiX16MOZNroShokeFIc5UvDyNqit7EOcfI8gejNzp0Pmj7SkDdggy8PIyusE6slt2sQIy0yARzdmIQSrPoX+BJ1DiUBW5/WC2V19CtyMD5oHQw4od/77tNWdj5/5m1x4sSLpo8ckhfmIFM2FbGnlfEyPRGbQs0XKEtGGkT/S1Sf79u319oBHDnynLhw8aLubQ43JiM4SD0bQ27TGB8Tq/MFlnpZujjF5ORD4pkf/Vj3NsKNqIXfXVAC4vhbZ2JtV8R6t9Wydnojq98HwQ90cZjhpBpEu55VT9GeMyzOLToA+QIZY8D9cvCbBSI4HPxdlKOvAWTEcbm9nNSqdlJlmrCyFCR/uEjjXQiLvmrVJ4JqR8NFmFXWrwgE72Q21pja5uRvhDJioVOSIzHXaNwXBBVA8iguXnxfnDu3GBgXYsyD35b76Cn/qM2iY5Ce+eG/WT+Q5unXxcmTRr/I27p1RbyjKSx4EuBcZ6IyIo7kCNsioqUroW4FSI5xP3XqVe0xyP3v7gWiV6mTRz25beDixFRHzqmL7BvJxxTxsk4lI3rygXpKRJ9uY5QV37Pn62LnjgcTkTz8Dj6PKBtl+XEMan5C4VEbH793Wj2ubmD9uvXi1lu3WD+Y4eEhk1ZHKe+fzsy/1fSI5JAob+qkSpgY++d/+kfx6L98Lfg73LZuvU0MDg6KTz+9Gle+/Ji8RpfkeS+o6Mp/koyc/teO8x8x1aVjcv8Vn8a9U6Jj8Naw+sOPPhJf+fKXxPr1660eDIiBpwn2rzP88niPy0Ff8YDkYf1+nbKUjz76NfHE1OOiXv98QCSKXHgP4zw6OiKWlz8xJc8mUMIsX/89apRCuYLf6Qa41gayY9xPy3FfKirRIV1O67SbK8c05tHry6OUlBBhwm38nuRlFKgrQqQrpixiTndTQfZlAfzWE1OP6ca/0BKmoh6/H1BvHpz9fkeziroFpt8ZHCSgozmmygpD896hSNofISsezyvibx3GFjS/01C6vI0oGLOkGplCgmxxmzWHzrY0/oWNxNQgA+RjqU5ZJzxK75KPM+taXVrFs2cXTOHGbUrC/DEhwfHonVORDBB9m7KOmyIfrSsZt0NuT8J/kdtn5bbQui/5/0cp67r3W9+UuvtzXZ/7wMYBsbj4XqLPQx51c2NRQC5FE3qEXv9p0nH3iujqwv1eEDP/oZWhH21bdehFXOyzZ9/RfaQ/iWOKp5U8t5fwcIr6IQmB/TQU6ftAeLnhd34Y/SCkCmLXWd3oINnSpUuxPk2M3OncX6LHH87xJjnuvyqiRhcqC0ZKgRdSPEazBCIIsCwG7DdN0FAdDd4RndV/UISfVb/3EuklZ0TyVl8lzsBszNEAGcZ/WoVUi0d0hRnqA5Av7hzTh+LIN2cg+VEqQtEl6pRkgQOqiUN3BcgSl5iSjqnBMS6edAGUVq9QFnBp6ZKTcCNCcDGP8C3RsJepN02rtbrri3eKf9i5Q8q2e4JtaHhIbPjMZ+T+/pi201gQlssj7wCLjnS9LuwIiz6e4yQZaH/N+NfD2H7hiK60Og78saglvH79urj66VWxdevt1g8QseY33ngzOAYN0A/msCI5HqkvCqI3TRihwORsEBuPZRAp3LAfnB8kCEiP803YZUx8+StfCnR1Hhgd3ax9ouZN9JjxbxTJMV1DdBy0ckzb0tlXrvw2yOZRyY+8HVNs58//RithwsydfCUTOCDyU/v2BhGkJE8lRE5AoL6b+4KnmeEmC3B/Y3tuDnsQUamsFmK5IDrGC9eciALBmNwkx/3VwhFdkX1BZUvbCPPRh/+f+8DqrAqqGw2pcoS9+tTTqE0/P/2d/R0REftFlzFkC01yBk+IPCNTeFpQVhVPnLyiLtH9a8Z/my+Z6jTOqIhzTDETKKZuPDfEtN8g+8HEZPoSIcx0Zh2rTmvVdZ0TziWMt+c4/oXImNaof5R36O/knQrybKMkDKy6h3UwbXjgga9mkvDCucKyI4lFyRjEnGNCoZlYVcoxXb9unRXfCeOPfeP6E47pu5IzvymiRQcOidV0eNvj0uM6mDVWMKsakNCy62TC8sfLVs6f2j+esEmd5iz2rxl/78ONNd0byjH9k1hNh68BLEvgrFl+nGN/sKiUYxYFwqFZWzpodio1jpBk1gmjNFYVx2PDqmP8UVpMZEz7fS/lNVl0ZEwxWZaMlcbMBsoNCSZoBBgZzUdKUEkckC/JzZfXUw03n639IwehqXvf73MrwWqCz8zonCBbg5vUMWvFaE4t9XS9I2OqLTM9f+rp8UuLhkcjIft9ljCxRC9oHUyusoq60RCRsnXjoyw3+lSDo24rIoZ9a6TahK+tBKsJPzfjn2P6kLNB01UN2rSqlISCnExbvpCDhPTSqteSfEjVwcBEtt2tvtbB5J1IoWrmkVBBNhVOq42bLRpuhKN+/c/Xrcz3xfXGuRIZUy9XLqmm+Cwc06XoP+JCu3JMDeEuK1qZupmg1W1ZVaq6EE9YW+FG1OBrJOSsbx0bakk/qMKNMJ9to+tjHYyNCSNUEsemVdXVwYRJPRvYuHGA8g28q4Oppfkwsl9FqYNBBaINCTE8fEtQh7JGzkk5ZevGp+pgcOPh/Lud1pdUQmkypqiD+RWy7EWTLiHIzk2+1cGg97oNIGNKzfg/edLObDNduPWk+3CjV45pLe0XTBM0fKqDgYW3ZVUhk1xaVUpCwU+A4UE9e95jgOutyVh7UwdT6+RLaoLGkyIywQGDi5POu8BJJ2FwYVvJhskTNroY6HwFRKRs3fiUVsb1sDUGhs4BqTo2eEV05Zh+KIgJGj7VwdjsYkDVwdi88XVa+VP5ZOt2QeTEx0B3DkjUscFHjR5AdbYlD96nOhib2VsqidNs2gv3UfU9ozmuLhiFIWM967oOptrl972vg7GZvaXqYGzmGeAUtzrGefZ90Tum2oy1U8e01s2XTRM0Lkii2yhdjQLOX9Qxs5m9hYSJ3lg2JRTKdSEd8Yqb3nZuA/vThBu3uGxUWs3gN7QTNNDDzwWiVsWmVfWhDgbHMGJRsrSP/4R3jUpr3f6AaYIG7mpf6mBsZm9d18G4hiFj3e+qDqaWxY/gwKkFBXzrB2Mre6sreHJVAOcCutlYYjXcaL0fTC2rH0JiQBCNSmFJXTUqjVoVyCmEwPJqNhS16i7rYHyAZgUTJ41KMyM6nAxJdnTK2tKu1z/xpg7GZvbWdR2Maxha6o3ZdkxrWf6YPPh5QSzuatOSRrFpcHCNVbGZxNHVzEO/o31GGchuaKlXl0Q/Xkiim+pgcGf7si6Szewt5SuEvouLRRZsw5dGpdUcflM7QcOnfjC2wo26CRpokVEWmPrB2JqgkTnR1QKwh6j3MPvGVjo8atWjySub2Vuqa8DAwGdLQ3RD54Z+Sup6L11aJIy2UanN2S/RKEg0tm0re4sLDR8FNxZkC/yDqanHSxFmbB1/TaNSK0tq1vL6YRVufJJyTH1ZFwmkt5XEwYVGFSEe4y5q9n1ANDDQGoXJ2zHNjeiqDgYWvW29m7LWwZQdhkaxuU/QqOZ8btp+MGWsg2EIU5e1XB3TWp4nxXUwDMpf0azgkesEjVreJ8Z1MAzKX9Gsi4SM6S/ycEyrls6N7Bxgswts1KpEH6EuuxiU0aobwo25TNCo2TgxH+tgqHCXqy4GZbXqmjqYXCZoVC2em/frIrlsmlpGGKb5ZT5Bo2brpHytg4lO+3LVxaCMMHT5ynyCRtXyuXlXB0PVYXC40e34K2TaqLRm86RMC/aWtR8MO6badakynaBRs31iPtbBUF2mXGVvy+qYRuuQFMayalRadXRuh3SOqYtwI0D1gzly5DlmoSWrbsqYFtKiK6u+VIQ6GJczo8oGavwVMpmgUXV4bt7VwYyMtvdCcVE/X1aYunx165g6I7qaoHGYeg/9Cm0tj9IKqs+5i87AZYWu17xYzZjOFk66tEiYpk91MNCK6GmOfW8cGAh0Y1laU/gCqte8QlcraNRcn5hv/WCgFRH5wWajiT9jLQyLCgBbOp2g4ZzoyjFtCCLc6KoOhuHYqusXFeh4gkbVk3Pzbl0khmvHNNsJGjUfTsrHOhiGWxjCjR1N0Kh6dG6og2kLN7qsg2G4BbVgsELqFTS8IboKN5KlvK76wTDcIujHs12bPEyVMa35dGI+1sEw3IKa9qiQaoJG1cNz864OhuEOupZ+oYQppEVXVt27OhiGe6tuCDcmqoOpenpu3tXBMNyCWtoyjVWv+XhSaoIGZmA0KK3O4cZyOqaaLl/9Say6rxYdUZiDQjPtjqe6lROGJFKsVa/5fGK+1cEw3Dumui5fcVa96vOJSaveFJpl2H/JVr2UQFxdN5m6sBZdWfXTgmgWj8ZDPPunfIBvhh6Z0aUtlVWv6EoDvCc618EwojAsKjCmW8O0WpBz09bBoDyAUT48knKpmFoRTkqFGz8URD8YtH/mzlrlAwIRmtXuyKViimLR4Zge0zmmJ078nK98CYHSAE3kbbao0iWEtg7mXLtzwuhxGOpgpqNlvIUiugo3HqPe4yRSOYGuAUmserWA58Z1MIw2CRNn1QtH9Lh+MDxBg616C/aHf9SKeGKmfjDwxF2si8RwjIoQ58+3NQfYEsbVqwU+Na/WRWK4t+oEYAgniqrRWx3TJvUe18GUD4jAbL39NuqtXYUmusmqo26Z+8GUD7fTkrUBp7TQRJdWfUloYusIN7poVMpwh9GRzbq3GtUeOD+ug2EEQORFE33ZXniim/rBoPERhxvZqkuMVfLYmdREDbFaVnuHiIQAFVBjjtkgTUXULPb5miBKedGwct++vcyAkgBJQ+pJvi5Dck/LFyxZMJHg442W7y0o0r+riN/pEh6HKKKHdTAaj5zRcxZ9RJwS7USvdEnusP53v8Zyd4qmsvp4XUhq9eXxYMXhaUq7HZz9PrOgBEDE7Zkf/TgboudIcB0WFOlDq7+kOa66fHmHOibUQ+zc8SAzoQR4av93uie6JBM6aL0kiP6IIbAWDZyC1jmdl+WdhkjIxQvv3/i7C6xEiN9sOb6DgqhHRkLhe999mjsHMNET6/A5ymKCSEjDomVcEjKB6GhbAQ195fIV8fHyJ8FjJwOrf0loOq3i+Kb0HZ8YTPQbkZTXdA4AellnYS1RpwKLv/zx8o0bIdNB2PdtMaJPLDDKTHTX2heWPrT4kD4fLy93HB+HrIKEYZSL6EnDi6RcQYswQ6P2zAByYgtChDvapQ+s/2X5dxLpE9bBaKrdGD2KWKIrydIWGwfpbJBcB/gEkCBRGQLpA4sP3a+TPqiDwfFz5wAmeit2USTz1akLyC8k+VssNmROaPFD6YPsmaFpJaOg0D3VkxB9gpIsRbKGYbFPVPoweg/w5Qg0qwlkS3/UmvdCOp1lS6ks+kJc9WKD0uZMEoavgDQl8G4c0e9o08CjIzyaDG9xmbbozTiN3hZSHB66hUeT4ac1v/g+5XstoTYqzqK3rQw3xP3IGZ7i3LlF0prjP3FE7+fhYxQFmgnxp5MQfQ248o/hrTVffE8XMm6mJjrPv2T4itPN16l/XgjnLlR5iBi94IRqqlyPh39oia4mWJA/ymD4BENbk5djia6bpHy5u8kRDIYta75mymVq6dKktRCD4QSGPptrOrjFEX2Bcki5ryHDB6BBlaa2Zc084iREb+o0EVf/MVxiWZVaa9DWuS2O6Id1O+E1gxgu8bPnj+qM7SHKvzSueKFWba4LohQAs3f6bu4T9frnedQZVgEju0ivQgjJQrYST+KMkotjhTtky86wCfiH0OYEwNGHdd+LXcNIrdoMMfQk9T5W7kWIZ3j4FrFhwwa+EozcAMfz2PH/DtaqIkh+v66DWyKiK7L/TpIdjYEacruJ0uxvvPHmaolApSIGBz/HV4WROcl/cuQ5nS7/liT5K6bvp+3UBa2OJkbGqkbMQBoOWlTcIoaGh4Iadi7vZXQKkPvgoR+YnM+Dcb/RSe9FkBxda1NPoQfZh2+Qf/VG4Gl5DBOgEhBh0cTLj+mcz66J3kJ4yJhZQcwrTQOU/obkD28ELgdmJJAriUneFdEjhN+lLHwmEzVY+jAQ4PjZ8/+lI/mzkuQzaX4v06VdWpZ02d6tpWfpU14gfGgIW++WJD+W9jcreR6wcl5BeHQTGBNE4qlbQOZslNvI6GaWPj3gdJ448WIwW4hAECeP1rB4QXSD1R9T5K/nYfkBtLIOpU9wI3CraO+lyguS5JpZbAuK5Eud/n7Fh5NUlr/ecgOE/5+L9MFKHOGNwNLHayse6HGxGkLsavXCis+DoKx/PSJ9Mu1MEEZ90DSVSW+X4NDimN+gcThXlB7PpMakUrQBUosShKTfnhX5ww7BvExjvgjnMxgIDrysSL6S1X4rvTB4ivyh09voxukF0dm6Z2+9IU3OzL8dt1QPNPhMVla854hOEB8WfkL8LcyZSu9Dzjwhyc4ObHeA5V48t2jS35lr8VIRXePshkmtxKTHih5Yo4mte+bSpBVNZcUX8jyuStkuRAvpp5Noe0Rqnph6jDOzCXDqlVfTEDw3mcJEbyc9LPx+kSCWzytPmzX4888fTbpU5oqSKM/aPMYKX6YbzuyssvJs3VMAhVeoLkzQrhAExxzkZ/PS4Uz0DAkPvQ7r7nJFPl8AJxPJngRS5ZiSKSuujpWJ3iHhs1wtu4iIKbxqdTR3d5O6Z6Lbc1zndBq+rEkmWPGYJlaZZjWZ6PYIPy00q2cDZUkyJXQ6uy7AYqK7JbtxCiFI/tS+vT3rqMLpfOHEz+OWoU89IYKJXkDr3qtkh0yBHjc4nd5JlShqTN10ODP/1sL4+L2/ULp9U+t76Ddy9uyCGBwc7JmWHyD4r3/9P1QvlahUafp8HmzRu7PusOwHqPeKnmBKKlVEjvUpTPSCSBmEIPfs2V04JxWpfEOn2kJIFSZ6PmQfU47qGKXbJycnxPg9d3t/HkgAQarEZDkzrxVnoheL7P3Ksk9T78O6T04+5KWjivmasOAxYcPCWXEmer6EP6AITwKWHfrdh4wqoikgeII6lcJocSa6fSnzkjDUvoPwjcZ91i08SI1SWpA8QY0KIiozvkdUmOjupUxsj0pY9vHxu4Psal6kR+TkgpQn8/Nvx0VRWmXKTCeNgpjo5SX8tDCUD0RJPzqyWYyMjgSvncobkPnyld+KixcuBgRPseK301JaJnrxyV5X1r2R9rtwYgF0ItPh2h+uBUvt/OHataQWuzQEZ6K7IfyEsu51Tw6p5wnORHer3RGZ2S8ybsaUAnAyD/eSBmeiM+FDLInVZM/xvGfcM9EZOsKHk7Sz7jYMQjfLSm4mut9OKxzWThovLantdEjwXtfdafBXAQYAMwyUTK/zvSAAAAAASUVORK5CYII=';
export default image;