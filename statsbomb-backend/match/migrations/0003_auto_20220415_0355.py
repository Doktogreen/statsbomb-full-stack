# Generated by Django 2.2 on 2022-04-15 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0002_auto_20220414_0346'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='match_id',
            field=models.IntegerField(blank=True),
        ),
    ]
