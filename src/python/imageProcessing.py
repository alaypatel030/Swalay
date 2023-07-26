import piexif
import os
from PIL import Image
quality = 100


def get_images(path):
    os.chdir(path)
    return [f for f in os.listdir(path) if os.path.isfile(f)]
    pass


def get_all_images(root):
    valid_format = ['JPG', 'JPEG']
    response = []
    for path, subdirs, files in os.walk(root):
        for name in files:
            extension = name.split('.')[-1:][0].upper()
            if extension in valid_format:
                # print str(i) + " " + str(os.path.join(path, name))
                response.append(os.path.join(path, name))

    return response


def compress_image(imagefiles):
    file_count = len(imagefiles)
    count = 0
    for image_path in imagefiles:
        try:
            # image_path = path + '/' + image
            im = Image.open(image_path)

            
            exif_bytes = None

            if exif_bytes is None:
                im.thumbnail((2500, 2500))
                im.save(image_path,  "jpeg")
                # new_image.save(image_path, "jpeg", quality=quality)
            else:
                im.thumbnail((2500, 2500))
                im.save(image_path,  "jpeg",exif=exif_bytes, quality=quality)
                # new_image.save(image_path, "jpeg", exif=exif_bytes, quality=quality)

            im.close()
            pass
        except IOError:
            pass
        finally:
            count = count + 1
            print("Processed: " + str(count) + "/" + str(file_count))


image_files = get_all_images("/Users/alaypatel/Desktop/Wed/Wedding")
compress_image(image_files)
# get_all_images(path)