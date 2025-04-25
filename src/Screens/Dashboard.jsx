import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
// Styles
import styles from '../Assets/styles/dashboard';
import {colors, fontFamily, typography} from '../Assets/theme';
// Components
import DashboardTabs from '../Components/DashboardTabs';
import ScreenBG from '../Components/ScreenBG';
import CardLinearDefault from '../Components/Cards/CardLinearDefault';
import SettingsListOption from '../Components/Cards/SettingsListOption';
// Libraries
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BarChart} from 'react-native-gifted-charts';

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ScreenBG style={styles.container}>
      <Text style={[typography.heading2, styles.heading2]}>Firewall</Text>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <DashboardTabs activeIndex={activeIndex} onChange={setActiveIndex} />
        {activeIndex === 0 ? <DashboardContent /> : <SettingsContent />}
      </View>
    </ScreenBG>
  );
}

function DashboardContent() {
  const barData = [
    {
      value: 900,
      label: '07 May',
      spacing: 2,
      labelWidth: 40,
      frontColor: colors.primary,
    },
    {
      value: 600,
      frontColor: colors.text_inactive,
    },
    {
      value: 400,
      label: '08 May',
      spacing: 2,
      labelWidth: 40,
      frontColor: colors.primary,
    },
    {
      value: 850,
      frontColor: colors.text_inactive,
    },
    {
      value: 50,
      label: '09 May',
      spacing: 2,
      labelWidth: 40,
      frontColor: colors.primary,
    },
    {
      value: 700,
      frontColor: colors.text_inactive,
    },
    {
      value: 700,
      label: '10 May',
      spacing: 2,
      labelWidth: 40,
      frontColor: colors.primary,
    },
    {
      value: 2,
      frontColor: colors.text_inactive,
    },
    {
      value: 500,
      label: '11 May',
      spacing: 2,
      labelWidth: 40,
      frontColor: colors.primary,
    },
    {
      value: 450,
      frontColor: colors.text_inactive,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.db_page}>
        <CardLinearDefault style={styles.db_data_card}>
          <View style={styles.db_data_card_header}>
            <View style={styles.db_data_card_header_left}>
              <Ionicons name="wifi" size={20} color={colors.primary} />
              <Text
                style={[styles.db_data_card_header_title, typography.heading2]}>
                WiFi Connection
              </Text>
            </View>
            <View style={styles.db_data_card_header_status_container}>
              <Text
                style={[styles.db_data_card_header_status, typography.caption]}>
                Connected
              </Text>
              <View style={styles.db_data_card_header_status_dot}></View>
            </View>
          </View>
          <View style={styles.db_data_card_infos}>
            <View style={styles.db_data_column}>
              <Text style={styles.db_data_label}>WiFi Name :</Text>
              <Text style={styles.db_data_label}>Network :</Text>
              <Text style={styles.db_data_label}>Firewall :</Text>
            </View>

            <View style={styles.dividerWrapper}></View>

            <View style={styles.db_data_column}>
              <Text style={[styles.db_data_value, styles.highlightYellow]}>
                TechForing
              </Text>
              <Text style={styles.db_data_value}>Monitoring</Text>
              <Text style={styles.db_data_value}>Active</Text>
            </View>

            <View style={styles.dividerWrapper}>
              <View style={styles.yellowDividerVertical}></View>
            </View>

            <View style={styles.db_data_column}>
              <Text style={styles.db_data_label}>Network Type :</Text>
              <Text style={styles.db_data_label}>Protocol :</Text>
            </View>

            <View style={styles.dividerWrapper} />

            <View style={styles.db_data_column}>
              <Text style={[styles.db_data_value, styles.highlightYellow]}>
                Public
              </Text>
              <Text style={styles.db_data_value}>WPA</Text>
            </View>
          </View>
          <View style={styles.yellowDividerHorizontal}></View>
          <View style={styles.db_chart}>
            <BarChart
              data={barData}
              barWidth={20}
              spacing={10}
              hideRules
              height={100}
              xAxisThickness={0}
              yAxisThickness={0}
              noOfSections={4}
              maxValue={1000}
              xAxisLabelTextStyle={{
                color: colors.text_inactive,
                fontSize: typography.caption.fontSize,
                fontFamily: `${fontFamily}-Regular`,
              }}
              yAxisTextStyle={{
                color: colors.text_inactive,
                fontSize: typography.caption.fontSize,
                fontFamily: `${fontFamily}-Regular`,
              }}
              yAxisColor={colors.text_inactive}
              xAxisColor={colors.text_inactive}
            />
          </View>
          <View style={styles.db_chart_label_container}>
            <Text style={styles.db_chart_label}>Data Usage Statistic:</Text>
            <View style={styles.db_chart_lables_container}>
              <View style={styles.db_chart_lable_item}>
                <View
                  style={[
                    styles.db_chart_lable_item_dot,
                    {backgroundColor: colors.primary},
                  ]}
                />
                <Text style={styles.db_chart_lable_item_text}>Outgoing</Text>
              </View>
              <View style={styles.db_chart_lable_item}>
                <View
                  style={[
                    styles.db_chart_lable_item_dot,
                    {backgroundColor: colors.text_inactive},
                  ]}
                />
                <Text style={styles.db_chart_lable_item_text}>Incoming</Text>
              </View>
            </View>
          </View>
        </CardLinearDefault>
        <View style={styles.data_cards}>
          <CardLinearDefault style={styles.card_data}>
            <Text style={[styles.card_data_number, typography.heading1]}>
              0
            </Text>
            <Text style={[styles.card_data_heading, typography.body]}>
              Malicious Website
            </Text>
          </CardLinearDefault>

          <CardLinearDefault style={styles.card_data}>
            <Text style={[styles.card_data_number, typography.heading1]}>
              13
            </Text>
            <Text style={[styles.card_data_heading, typography.body]}>
              Ad Blocked
            </Text>
          </CardLinearDefault>

          <CardLinearDefault style={styles.card_data}>
            <Text style={[styles.card_data_number, typography.heading1]}>
              6
            </Text>
            <Text style={[styles.card_data_heading, typography.body]}>
              Unwanted QR Codes
            </Text>
          </CardLinearDefault>

          <CardLinearDefault style={styles.card_data}>
            <Text style={[styles.card_data_number, typography.heading1]}>
              1
            </Text>
            <Text style={[styles.card_data_heading, typography.body]}>
              Phishing / Scam
            </Text>
          </CardLinearDefault>
        </View>
      </View>
    </ScrollView>
  );
}

function SettingsContent() {
  const [toggles, setToggles] = useState({
    monitor: true,
    malicious: true,
    ads: false,
    persistent: true,
    scam: true,
    qr: false,
  });

  const updateToggle = key =>
    setToggles(prev => ({...prev, [key]: !prev[key]}));

  return (
    <>
      <CardLinearDefault style={styles.options_list}>
        <SettingsListOption
          icon={
            <Ionicons name="swap-horizontal" size={20} color={colors.primary} />
          }
          title="Monitor Connections"
          subtitle="Real-Time monitoring"
          value={toggles.monitor}
          onChange={() => updateToggle('monitor')}
        />
        <SettingsListOption
          icon={<Ionicons name="snow" size={20} color={colors.primary} />}
          title="Malicious Website Blocker"
          subtitle="Protection against malicious websites"
          value={toggles.malicious}
          onChange={() => updateToggle('malicious')}
        />
        <SettingsListOption
          icon={<Ionicons name="ban" size={20} color={colors.primary} />}
          title="Ad Blocker"
          subtitle="Block any unwanted Ads"
          value={toggles.ads}
          onChange={() => updateToggle('ads')}
        />
        <SettingsListOption
          icon={<Ionicons name="eye-off" size={20} color={colors.primary} />}
          title="Block Persistent & Distracting Ads"
          subtitle="Block distracting ads"
          value={toggles.persistent}
          onChange={() => updateToggle('persistent')}
        />
        <SettingsListOption
          icon={
            <Ionicons
              name="shield-checkmark"
              size={20}
              color={colors.primary}
            />
          }
          title="Phishing/Scam Detection"
          subtitle="Detect phishing and scam attempts"
          value={toggles.scam}
          onChange={() => updateToggle('scam')}
        />
        <SettingsListOption
          icon={<Ionicons name="qr-code" size={20} color={colors.primary} />}
          title="QR Code Scanner"
          subtitle="Scan any unwanted codes before take you in"
          value={toggles.qr}
          onChange={() => updateToggle('qr')}
        />
        <View style={styles.option_warning}>
          <Ionicons
            name="warning-outline"
            size={24}
            color={colors.primary_light}
          />
          <Text style={[styles.option_warning_text, typography.caption]}>
            Configuring firewall settings incorrectly can leave your device and
            personal information vulnerable to cyber attacks. Please ensure you
            have a thorough understanding of the settings before making any
            changes
          </Text>
        </View>
      </CardLinearDefault>
    </>
  );
}
