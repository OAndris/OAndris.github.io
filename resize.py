from PIL import Image, ImageFilter
import os

folder = "./images/galeria/allo"
new_width = 1280

files = os.listdir(folder)
for file in files:
    filepath = os.path.join(folder, file)
    img = Image.open(filepath)
    width, height = img.size
    ratio = new_width / width

    newsize = (round(ratio*width), round(ratio*height))
    img.thumbnail(newsize, Image.ANTIALIAS)
    newpath = os.path.splitext(file)[0] + ".jpg"
    img.save(newpath, "jpeg")
