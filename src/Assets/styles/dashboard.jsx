import {Platform, StyleSheet} from 'react-native';
import {colors, typography} from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  db_page:{
    flex: 1,
    paddingBottom: 200
  },
  heading2: {
    color: colors.primary,
    opacity: 0.7,
    alignSelf: 'center',
  },
  data_cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  card_data: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_data_number: {
    color: colors.primary,
    marginBottom: 10,
  },
  card_data_heading: {
    color: colors.text_white,
    textAlign: 'center',
  },

  options_list: {
    width: '100%',
    marginTop: 10,
    paddingVertical: 0,
    paddingBottom: 10,
  },
  option_warning: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  option_warning_text: {
    color: colors.primary_light,
    paddingHorizontal: 16,
  },

  db_data_card: {
    marginVertical: 20,
    width: '100%',
  },
  db_data_card_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  db_data_card_header_left: {
    flexDirection: 'row',
  },
  db_data_card_header_title: {
    color: colors.primary_light,
    marginLeft: 10,
  },
  db_data_card_header_status_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  db_data_card_header_status: {
    color: colors.text_white,
  },
  db_data_card_header_status_dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.primary,
    marginLeft: 6,
  },
  db_data_card_infos: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  db_data_column: {
    justifyContent: 'space-between',
  },
  db_data_label: {
    color: colors.text_inactive,
    ...typography.body,
    marginBottom: 12,
  },
  db_data_value: {
    color: '#fff',
    ...typography.body,
    marginBottom: 12,
  },
  highlightYellow: {
    color: colors.primary,
  },
  dividerWrapper: {
    width: 1,
    paddingHorizontal: 7,
  },
  yellowDividerVertical: {
    width: 1,
    height: 80,
    backgroundColor: '#444',
  },
  yellowDividerHorizontal: {
    width: 'auto',
    height: 1,
    backgroundColor: '#444',
    marginVertical: 10,
  },
  db_chart: {
    width: 'auto',
    overflow: 'hidden',
    marginTop: 10,
  },
  db_chart_label_container:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  db_chart_label: {
    color: colors.text_inactive,
    marginRight: 6
  },
  db_chart_lables_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  db_chart_lable_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  db_chart_lable_item_dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  db_chart_lable_item_text: {
    color: colors.text_inactive,
    fontSize: 14,
  },
});

export default styles;
