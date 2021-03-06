# Generated by Django 2.2 on 2022-04-15 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('match_id', models.IntegerField(blank=True, unique=True)),
                ('team_id', models.IntegerField(blank=True, null=True)),
                ('player_id', models.IntegerField(blank=True, null=True)),
                ('minutes_played', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('team_possession_percentage', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('xg', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('shots', models.IntegerField(blank=True, null=True)),
                ('goals', models.IntegerField(blank=True, null=True)),
                ('tackles', models.IntegerField(blank=True, null=True)),
                ('interceptions', models.IntegerField(blank=True, null=True)),
                ('pressures', models.IntegerField(blank=True, null=True)),
                ('passes', models.IntegerField(blank=True, null=True)),
                ('completed_passes', models.IntegerField(blank=True, null=True)),
                ('left_foot_passes', models.IntegerField(blank=True, null=True)),
                ('right_foot_passes', models.IntegerField(blank=True, null=True)),
                ('player_shots_faced', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
