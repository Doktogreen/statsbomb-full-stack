# Generated by Django 2.2 on 2022-04-14 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teams',
            name='team_id',
            field=models.IntegerField(blank=True, unique=True),
        ),
    ]