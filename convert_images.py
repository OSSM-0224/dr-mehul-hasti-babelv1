from pathlib import Path
from PIL import Image
from pillow_heif import register_heif_opener
import shutil

register_heif_opener()

root = Path('assets')
public = Path('client/public')
images_dir = public / 'images'
images_dir.mkdir(parents=True, exist_ok=True)

# Copy the main brand images into the public folder so the favicon / hero image resolves.
for src_name, dst_name in [
    ('UniqueDental1.png', 'UniqueDental1.png'),
    ('uniquedetnalbigimage.png', 'uniquedental1.png'),
]:
    src = root / src_name
    dst = public / dst_name
    shutil.copyfile(src, dst)
    print(f'copied {src_name} -> {dst_name}')

# Convert the HEIC clinic photos into PNG files for the dental tourism gallery.
heic_mappings = [
    ('consultation room.HEIC', 'chembur3.png'),
    ('lounge.HEIC', 'chembur4.png'),
    ('suit image.HEIC', 'chembur5.png'),
    ('suite.HEIC', 'chembur2.png'),
    ('IMG_2312.HEIC', 'chembur6.png'),
]

for src_name, dst_name in heic_mappings:
    src = root / src_name
    dst = images_dir / dst_name
    with Image.open(src) as img:
        img.save(dst, format='PNG')
    print(f'converted {src_name} -> {dst_name}')

# Create the mankhurd gallery copies from the converted Chembur images.
for src_name, dst_name in [
    ('chembur2.png', 'mankhurd1.png'),
    ('chembur3.png', 'mankhurd2.png'),
    ('chembur4.png', 'mankhurd3.png'),
    ('chembur5.png', 'mankhurd4.png'),
    ('chembur6.png', 'mankhurd5.png'),
    ('chembur2.png', 'mankhurd6.png'),
]:
    src = images_dir / src_name
    dst = images_dir / dst_name
    shutil.copyfile(src, dst)
    print(f'copied {src_name} -> {dst_name}')
